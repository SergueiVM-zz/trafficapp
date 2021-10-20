import * as packageJson from '../../package.json';
import * as _ from 'lodash';

export const environment = {
  production: true,
  infocarUrl: 'https://x5j6sm2fv0.execute-api.eu-west-1.amazonaws.com/Prod/traffic/',
  version: _.get(packageJson, "version")
};
