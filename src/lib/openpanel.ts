import { OpenPanel } from '@openpanel/web';
import { browser, dev } from '$app/environment';

let op: OpenPanel | undefined;

export function initOpenPanel() {
	if (!browser || op) return;

	const clientId = import.meta.env.PUBLIC_OPENPANEL_CLIENT_ID;
	if (!clientId) return;

	op = new OpenPanel({
		apiUrl: import.meta.env.PUBLIC_OPENPANEL_API_URL,
		clientId,
		trackScreenViews: true,
		trackOutgoingLinks: true,
		trackAttributes: true,
		debug: dev
	});
}

export function getOpenPanel() {
	return op;
}

export function trackEvent(name: string, properties?: Record<string, string>) {
	op?.track(name, properties);
}
