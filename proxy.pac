function FindProxyForURL(url, host) {
	// our local URLs from the domains below discousa.com don't need a proxy:
	if (shExpMatch(host, "*.discousa.com"))
	{
		return "DIRECT";
	}

	// URLs within this network are accessed through
	if (isInNet(host, "10.1.*", "255.255.255.0"))
	{
		return "DIRECT";
	}

	// All other requests go through port 1080 of PROXY 10.3.10.30
	// should that fail to respond, go directly to the WWW:
	return "PROXY 10.3.10.30:1080";
}