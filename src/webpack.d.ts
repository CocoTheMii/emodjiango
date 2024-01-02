declare module "*.svg" {
    import React from "react";
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare module "*.svg?inline" {
    const url: string;
    export default url;
}

declare module "*.svg?url" {
    const url: string;
    export default url;
}
