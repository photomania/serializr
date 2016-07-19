

export interface ModelSchema {
    factory: FunctionConstructor;
    props: any;
}

export interface PropSchema {
    serializer: (propValue: any) => any;
    deserializer: (jsonValue: any, cb: (err: any, propvalue: any) => void, context?: any, oldValue?: any) => any;
    jsonname: string;
}

export const createModelSchema: (constructorFunc: FunctionConstructor, props: any) => ModelSchema;
export const createSimpleSchema: any
export const getDefaultModelSchema: any;
export const isModelSchema: any;
export const isPropSchema: any;
export const isContext: any;

export function serializable (...args: any[]): any;

export const serialize: any;
export const deserialize: any;
export const update: any;
export const primitive: () => any;
export const alias: any;
export const list: (propSchema: PropSchema) => any;
export const map: any;
export const child: (modelSchema: ModelSchema | Function) => any;
export const ref: (childAttribute: string, lookup: (id: any, cb: (err: any, res: any) => void, context: any) => void) => any;

// export {
//     createModelSchema,
//     createSimpleSchema,
//     getDefaultModelSchema,
//     isModelSchema,
//     isPropSchema,
//     isContext,
//     serializable,
//     serialize,
//     deserialize,
//     update,
//     primitive,
//     alias,
//     list,
//     map,
//     child,
//     ref
// };
