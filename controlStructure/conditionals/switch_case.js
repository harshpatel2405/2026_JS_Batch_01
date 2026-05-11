let season = parseInt(prompt("1. Summer\n2. Monsoon\n3. Winter\n4. Spring\nEnter your choice"))

switch (season) {
    case 1: console.log("Season : Summer\n")
        break;
    case 2: console.log("Season : Monsoon\n")
        break;
    case 3: console.log("Season : Winter\n")
        break;
    case 4: console.log("Season : Spring\n")
        break;
    default: console.log("select Season between 1 and 4 only")
}