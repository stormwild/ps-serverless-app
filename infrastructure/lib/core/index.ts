import * as cdk from '@aws-cdk/core';
import { AssetStorage } from './storage';
import { WebApp } from './webapp';

export class ApplicationStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new cdk.CfnOutput(this, 'TestOutput', {
      value: 'Hey, it worked!',
    });

    const storage = new AssetStorage(this, 'Storage');

    new WebApp(this, 'WebApp', {
      hostingBucket: storage.hostingBucket,
    });
  }
}
