export interface ModelSchema {
    factory: (context: any) => any;
    props: any;
}

export interface PropSchema<T> {
    serializer: (propValue: T) => string | number | boolean | Object;
    deserializer: (jsonValue: string | number | boolean | Object, cb: (err: any, propvalue: T) => void, context?: any, oldValue?: any) => void | T;
    jsonname?: string;
}

export const createModelSchema: (constructorFunc: FunctionConstructor, props: any) => ModelSchema;
export const createSimpleSchema: any
export function getDefaultModelSchema(constructorFunc: any): ModelSchema;
export const isModelSchema: any;
export const isPropSchema: any;
export const isContext: any;

// export function serializable (...args: any[]): any;

export function serializable<T> (arg1: PropSchema<T>): (...args: any[]) => void;
export function serializable (arg1: any, arg2: any): any;
export function serializable (arg1: any, arg2: any, arg3: any): any;

export const serialize: any;
export const deserialize: any;
export const update: any;
export const primitive: () => any;
export const alias: any;
export function list<T> (propSchema: PropSchema<T>): any;
export const map: any;
export const child: (modelSchema: ModelSchema | Function) => any;
export const ref: (childAttribute: string, lookup: (id: any, cb: (err: any, res: any) => void, context: any) => void) => any;