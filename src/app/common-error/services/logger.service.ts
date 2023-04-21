import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  logInfo(x: string): void {
    console.info(x);
  }
}
