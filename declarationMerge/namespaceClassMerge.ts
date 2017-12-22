/**
 * 合并命名空间
 */
class Album {
    label: Album.AlbumLabel
}

namespace Album {
    export class AlbumLabel { }
}

function buildLabel(name: string): string {
    return buildLabel.suffix + name + buildLabel.prefix;
}

namespace buildLabel {
    export let suffix = "";
    export let prefix = "Hello";
}

console.log(buildLabel("Sam Smith"));

enum Color {
    red = 1,
    green = 2,
    blue = 4
}


namespace Color {
    export function mixColor(colorName: string) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue
        }
    }
}