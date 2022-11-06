const stringUtilities = {
    replaceSpaceWithPlusSign: (name: string) => {
        return name.replace(' ', '+');
    },
    getInitials: (name: string) => {
        return name.replace(/[^a-z ]/gi,'').split(" ").map((n) => n[0]).join("");
    }
}

export default stringUtilities;
