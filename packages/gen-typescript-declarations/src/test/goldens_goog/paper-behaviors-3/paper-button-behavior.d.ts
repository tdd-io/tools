/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-button-behavior.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

declare module 'goog:polymer.paperBehaviors.paperButtonBehavior' {

  import {IronButtonState} from 'goog:polymer.ironBehaviors.ironButtonState'; // from //third_party/javascript/polymer/v2/iron-behaviors

  import {IronControlState} from 'goog:polymer.ironBehaviors.ironControlState'; // from //third_party/javascript/polymer/v2/iron-behaviors

  import {PaperRippleBehavior} from 'goog:polymer.paperBehaviors.paperRippleBehavior'; // from //third_party/javascript/polymer/v2/paper-behaviors

  interface PaperButtonBehavior extends IronButtonState, IronControlState, PaperRippleBehavior {

    /**
     * The z-depth of this element, from 0-5. Setting to 0 will remove the
     * shadow, and each increasing number greater than 0 will be "deeper"
     * than the last.
     */
    readonly elevation: number|null|undefined;
    hostAttributes: object|null;

    /**
     * In addition to `IronButtonState` behavior, when space key goes down,
     * create a ripple down effect.
     *
     * @param event .
     */
    _spaceKeyDownHandler(event: KeyboardEvent): void;

    /**
     * In addition to `IronButtonState` behavior, when space key goes up,
     * create a ripple up effect.
     *
     * @param event .
     */
    _spaceKeyUpHandler(event: KeyboardEvent): void;
    _calculateElevation(): void;
    _computeKeyboardClass(receivedFocusFromKeyboard: any): void;
  }

  const PaperButtonBehavior: object;

  export {PaperButtonBehavior};
}
