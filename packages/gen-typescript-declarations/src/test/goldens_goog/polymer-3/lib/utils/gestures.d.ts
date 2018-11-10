/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/utils/gestures.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.

declare module 'goog:polymer.polymer.lib.utils.gestures' {

  import {timeOut, microTask} from 'goog:polymer.polymer.lib.utils.async'; // from //third_party/javascript/polymer/v2/polymer

  import {Debouncer} from 'goog:polymer.polymer.lib.utils.debounce'; // from //third_party/javascript/polymer/v2/polymer

  export {deepTargetFind};


  /**
   * Finds the element rendered on the screen at the provided coordinates.
   *
   * Similar to `document.elementFromPoint`, but pierces through
   * shadow roots.
   *
   * @returns Returns the deepest shadowRoot inclusive element
   * found at the screen position given.
   */
  function deepTargetFind(x: number, y: number): Element|null;

  export {addListener};


  /**
   * Adds an event listener to a node for the given gesture type.
   *
   * @returns Returns true if a gesture event listener was added.
   */
  function addListener(node: EventTarget, evType: string, handler: (p0: Event) => void): boolean;

  export {removeListener};


  /**
   * Removes an event listener from a node for the given gesture type.
   *
   * @returns Returns true if a gesture event listener was removed.
   */
  function removeListener(node: EventTarget, evType: string, handler: (p0: Event) => void): boolean;

  export {register};


  /**
   * Registers a new gesture event recognizer for adding new custom
   * gesture event types.
   */
  function register(recog: GestureRecognizer): void;

  export {setTouchAction};


  /**
   * Sets scrolling direction on node.
   *
   * This value is checked on first move, thus it should be called prior to
   * adding event listeners.
   */
  function setTouchAction(node: EventTarget, value: string): void;

  export {prevent};


  /**
   * Prevents the dispatch and default action of the given event name.
   */
  function prevent(evName: string): void;

  export {resetMouseCanceller};


  /**
   * Reset the 2500ms timeout on processing mouse input after detecting touch input.
   *
   * Touch inputs create synthesized mouse inputs anywhere from 0 to 2000ms after the touch.
   * This method should only be called during testing with simulated touch inputs.
   * Calling this method in production may cause duplicate taps or other Gestures.
   */
  function resetMouseCanceller(): void;

  import {GestureRecognizer} from 'goog:polymer.polymer.interfaces'; // from //third_party/javascript/polymer/v2/polymer
}
