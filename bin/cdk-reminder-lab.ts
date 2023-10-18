#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkReminderLabStack } from '../lib/cdk-reminder-lab-stack';

const app = new cdk.App();
new CdkReminderLabStack(app, 'CdkReminderLabStack');
