import { Injectable } from '@angular/core';

@Injectable()
export class HammerExtensionPlugin {
  private manager: any;
  private _hammer: HammerStatic = typeof window !== 'undefined' ? (window as any).Hammer : null;
  events: string[] = this._hammer ? [
    'pinchpan',
  ] : [];

  supports(eventName: string): boolean {
    return this._hammer && this.events.includes(eventName);
  }
  addEventListener(element: HTMLElement, eventName: string, handler: Function): Function {
    const zone = this.manager.getZone();

    return zone.runOutsideAngular(() => {

      const mc = new this._hammer.Manager(element, {
        touchAction: 'pan-x pan-y'
      });
      mc.add(new this._hammer.Pinch({ enable: true }));

      const callback = function (eventObj: HammerInput) {
      //  eventObj.preventDefault();
        zone.runGuarded(function () { handler(eventObj); });
      };
      mc.on('pinchmove', callback);
      return () => mc.destroy();
    });
  }

  // addEventListener(element: HTMLElement, eventName: string, handler: Function): Function {
  //   let zone = this.manager.getZone();
  //   let eventsArray = this.getMultiEventArray(eventName);
  //   // Entering back into angular to trigger changeDetection
  //   let outsideHandler = (event: any) => { zone.runGuarded(() => handler(event)); };
  //   // Executed outside of angular so that change detection is not
  //   // constantly triggered.
  //   let addAndRemoveHostListenersForOutsideEvents = () => {
  //     eventsArray.forEach((singleEventName: string) => {
  //       this.manager.addEventListener(element, singleEventName, outsideHandler);
  //     });
  //   }
  //   return this.manager.getZone().runOutsideAngular(addAndRemoveHostListenersForOutsideEvents);
  // }
}
