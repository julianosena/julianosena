import * as cdk from 'aws-cdk-lib/core';
import {CfnOutput, RemovalPolicy} from 'aws-cdk-lib/core';
import {Construct} from 'constructs';
import * as s3 from "aws-cdk-lib/aws-s3";

export class PortfolioWebsiteInfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucketName = 'julianosena-portfolio-website'
    const bucket = new s3.Bucket(this, 'portfolio-website-bucket', {
      bucketName,
      removalPolicy: RemovalPolicy.DESTROY
    });

    new CfnOutput(this, 'portfolio-website-bucket-output', {
      value: bucket.bucketArn,
      exportName: bucketName,
    });
  }
}
