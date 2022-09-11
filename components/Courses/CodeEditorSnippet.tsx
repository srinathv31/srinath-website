import React from "react";

export default function CodeEditorSnippet({ sandboxUrl }: {
    sandboxUrl: string
}): JSX.Element {
    return(
        <React.Fragment>
            <iframe src={sandboxUrl+"&view=split"}
                style={{ width: "80vw", minHeight: "50vh", borderRadius: "4px", border: 0, overflow: "hidden", margin: 10 }}
                title="boring-chebyshev-j1p0vd"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
        </React.Fragment>
    );
}
