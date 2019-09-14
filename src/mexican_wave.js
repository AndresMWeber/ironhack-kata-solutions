function wave(s) {
    return s.split('').map((char, i) => s.substr(0, i) + char.toUpperCase() + s.substr(i + 1)).filter(st => st != s)
}