import React from "react";

const HelloStateLess = () => {
    return <p>Hello World!</p>;
};

class HelloStateFull extends React.Component {
    render() {
        return <p>Hello world</p>;
    }
}

// export default HelloStateLess;
export { HelloStateFull, HelloStateLess };
