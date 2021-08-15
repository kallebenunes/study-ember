import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApplicationService extends Service {
  @tracked userIsLogged = false;
}
