const WIDTH_SEARCH = 'width="';
const HEIGHT_SEARCH = 'height="';
const START = '<svg';

export function processIcon(source: string, name: string): string {
    if (source.includes(`id="${name}"`)) {
        return source;
    }

    const src = source.substring(source.indexOf(START));
    const attributes = src.substring(0, src.indexOf('>'));

    if (
        !attributes ||
        !attributes.includes(WIDTH_SEARCH) ||
        !attributes.includes(HEIGHT_SEARCH)
    ) {
        return (
            src.replace(
                START,
                `<svg xmlns="http://www.w3.org/2000/svg"><g id="${name}" xmlns="http://www.w3.org/2000/svg"><svg`,
            ) + '</g></svg>'
        );
    }

    const indexOfWidth = attributes.indexOf(WIDTH_SEARCH);
    const indexOfHeight = attributes.indexOf(HEIGHT_SEARCH);
    const widthOffset = indexOfWidth + WIDTH_SEARCH.length;
    const heightOffset = indexOfHeight + HEIGHT_SEARCH.length;
    const widthString = attributes.substring(
        widthOffset,
        attributes.indexOf('"', widthOffset),
    );
    const heightString = attributes.substring(
        heightOffset,
        attributes.indexOf('"', heightOffset),
    );

    if (
        !heightString ||
        !widthString ||
        widthString.includes('%') ||
        heightString.includes('%') ||
        widthString.includes('em') ||
        heightString.includes('em')
    ) {
        return src.replace(START, `<svg id="${name}"`);
    }

    const width = parseInt(widthString, 10);
    const height = parseInt(heightString, 10);

    return `<g id="${name}" xmlns="http://www.w3.org/2000/svg"><svg  x="50%" y="50%" width="${
        width / 16
    }em" height="${
        height / 16
    }em" overflow="visible" viewBox="0 0 ${width} ${height}"><svg x="${-width / 2}" y="${
        -height / 2
    }">${src}</svg></svg></g>`;
}
