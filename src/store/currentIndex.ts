import { derived } from 'svelte/store';
import { currentId } from './currentId';
import { sortedNotes } from './sortedNotes';

export const currentIndex = derived([sortedNotes, currentId], ([$sortedNotes, $currentId]) => {
	if (!$currentId) {
		// Trick the system into thinking we are the 'latest' note.
		// Probably a bad idea to do this.
		return $sortedNotes.length;
	}
	const foundIndex = $sortedNotes.findIndex((_) => _.key === $currentId);

	return foundIndex;
});
