provider "aws" {
  region = "us-west-2"
}

terraform {
  backend "s3" {
    encrypt        = true
    bucket         = "terraform-state-storage-863362256468" // TODO replace <DEV_AWS_ACCT_NUM>
    dynamodb_table = "terraform-state-lock-863362256468"    // TODO replace <DEV_AWS_ACCT_NUM>
    key            = "mhm62-fav-color-ui/dev/app.tfstate"   // TODO replace <APP_NAME>
    region         = "us-west-2"
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
  required_version = ">= 0.13.3"
}

locals {
  app_name = "mhm62-fav-color-ui"        // TODO replace <APP_NAME>
  url      = "${local.app_name}.byu.edu" // TODO double check if <APP_NAME>.byu.edu is what you want for your public URL
  //url = "ns-91.awsdns-11.com"
  default_tags = {
    repo             = "https://github.com/byu-oit/mhm62-fav-color-ui" # TODO fix to match your GitHub repo
    app              = local.app_name
    team             = "OIT-BYU-APPS-CUSTOM"
    data-sensitivity = "confidential" // TODO Update if needed
    env              = "dev"
  }
}

module "acs" {
  source = "github.com/byu-oit/terraform-aws-acs-info?ref=v3.1.0"
}

data "aws_route53_zone" "hosted_zone" {
  name = local.url
}

module "s3_site" {
  source         = "github.com/byu-oit/terraform-aws-s3staticsite?ref=v6.0.0"
  site_url       = local.url
  hosted_zone_id = data.aws_route53_zone.hosted_zone.zone_id
  s3_bucket_name = "${local.app_name}.byu.edu"

  tags = local.default_tags
}

output "s3_bucket" {
  value = module.s3_site.site_bucket.bucket
}

output "cf_distribution_id" {
  value = module.s3_site.cf_distribution.id
}
