export const onlyOne = (node, elementName  = 'element') => {
    if (node.childNodes.length > 1) {
        throw new Error(`${elementName} should have one node only`);
    }
};

export const noChildren = (node, elementName  = 'element') => {
    if (node.childNodes.length !== 0) {
        throw new Error(`${elementName} shouldn't have any children`);
    }
};
