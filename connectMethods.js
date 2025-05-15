import { push } from './methods/push.js';
import { get } from './methods/get.js';
import { pop } from './methods/pop.js';
import { shift } from './methods/shift.js';

export function connectMethods(MyArrayClass) {
    MyArrayClass.prototype.push = push;
    MyArrayClass.prototype.get = get;
    MyArrayClass.prototype.pop = pop;
    MyArrayClass.prototype.shift = shift;
}