const obj = {
    name: "carrots",
    type: "vegetable",
    color: "orange"
}

const id = {
    ...obj,
    id: 1,
    game: "Bloodborne"
}

// const manager = new Manager(...response, managerRes.officeNumber)
console.log(id)