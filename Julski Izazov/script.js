async function ping(n)
{
	console.log('ping', n);
	await pong(n + 1);
	ping(n + 2);
}

function pong(n)
{
	console.log('pong', n);
}

ping(0);