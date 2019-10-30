const fs = require("fs");

let crearArchivo = (base) => {

	let data = "";
	return new Promise((resolve, reject) => {
		if(!Number(base)) {
			reject("Not a number");
			return;
		}
		for(let x = 1; x <= 10; x++) {
			data += (`${ base } * ${ x } = ${ base * x }`) + "\n";
		}

		fs.writeFile(`tabla-${base}-.txt`, data, (err) => {
		  if (err) reject(err)
		  else resolve(`tabla-${base}.txt`);
		});
	});

}

module.exports = {
	crearArchivo,
}
