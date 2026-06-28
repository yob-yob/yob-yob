import type { Component } from 'svelte';
import type { WebsiteKey } from '$lib/data/portfolio';
import GitHubLink from './GitHubLink.svelte';
import LinkedInLink from './LinkedInLink.svelte';
import GoogleLink from './GoogleLink.svelte';
import FacebookLink from './FacebookLink.svelte';
import XLink from './XLink.svelte';
import AwsLink from './AwsLink.svelte';
import StackOverflowLink from './StackOverflowLink.svelte';
import GitLabLink from './GitLabLink.svelte';
import YoutubeLink from './YoutubeLink.svelte';
import HackerRankLink from './HackerRankLink.svelte';
import GenericLink from './GenericLink.svelte';

type LinkComponent = Component<{ href: string; label: string }>;

export const websiteLinkComponents: Record<WebsiteKey, LinkComponent> = {
	github: GitHubLink,
	linkedin: LinkedInLink,
	google: GoogleLink,
	facebook: FacebookLink,
	x: XLink,
	aws: AwsLink,
	stackoverflow: StackOverflowLink,
	gitlab: GitLabLink,
	youtube: YoutubeLink,
	hackerrank: HackerRankLink,
	generic: GenericLink
};

export function getWebsiteLinkComponent(website: WebsiteKey): LinkComponent {
	return websiteLinkComponents[website] ?? GenericLink;
}
