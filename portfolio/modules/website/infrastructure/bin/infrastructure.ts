#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import {PortfolioWebsiteInfrastructureStack} from '../lib/portfolio-website-infrastructure-stack';

const app = new cdk.App();
new PortfolioWebsiteInfrastructureStack(app, 'portfolio-website-infrastructure-stack', {});