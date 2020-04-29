interface Ports {
    [key: string]: {
        subscribe: (arg?: (NodeData: any) => void) => void;
    };
}
declare const _default: (ports: Ports) => void;
export default _default;
