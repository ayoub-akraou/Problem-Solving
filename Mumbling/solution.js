function accum(s) {
	return s.split('').map((e, i) => (e.toUpperCase() + e.toLowerCase().repeat(i))).join('-');
}