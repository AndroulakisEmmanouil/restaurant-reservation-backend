exports.getUsers = (req, res) => {
    res.json([
        { id: 1, name: "Γιώργος" },
        { id: 2, name: "Μαρία" }
    ]);
};
