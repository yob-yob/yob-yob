import { OpenPanel } from '@openpanel/web';
import { browser, dev } from '$app/environment';
import {
	PUBLIC_OPENPANEL_API_URL,
	PUBLIC_OPENPANEL_CLIENT_ID
} from '$env/static/public';

let op: OpenPanel | undefined;

export function initOpenPanel() {
	if (!browser || op) return;

	if (!PUBLIC_OPENPANEL_CLIENT_ID) {
		if (dev) console.warn('[OpenPanel] Not initialized — PUBLIC_OPENPANEL_CLIENT_ID is missing');
		return;
	}

	op = new OpenPanel({
		apiUrl: PUBLIC_OPENPANEL_API_URL,
		clientId: PUBLIC_OPENPANEL_CLIENT_ID,
		trackScreenViews: true,
		trackOutgoingLinks: true,
		trackAttributes: true,
		debug: dev
	});

	if (dev) {
		console.log('[OpenPanel] Ready — events will be sent to', PUBLIC_OPENPANEL_API_URL || 'default API');
	}
}

export function getOpenPanel() {
	return op;
}

export function trackEvent(name: string, properties?: Record<string, string>) {
	if (dev) console.log('[OpenPanel] Event:', name, properties ?? {});
	op?.track(name, properties);
}

export function trackInternalLinkClick(properties: {
	href: string;
	label: string;
	section: string;
}) {
	trackEvent('link_clicked', {
		link_type: 'internal',
		href: properties.href,
		label: properties.label,
		section: properties.section
	});
}

export function trackSectionNavClick(sectionId: string, sectionLabel: string) {
	trackEvent('section_nav_clicked', {
		section_id: sectionId,
		section_label: sectionLabel
	});
}
