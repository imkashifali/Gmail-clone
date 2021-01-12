import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
	name: "mail",
	initialState: {
		selectedMails: null,
		sendMessageIsOpen: false,
	},
	reducers: {
		selectedMail: (state, action) => {
			state.selectedMails = action.payload;
		},
		openSendMessage: (state) => {
			state.sendMessageIsOpen = true;
		},
		closeSendMessage: (state) => {
			state.sendMessageIsOpen = false;
		},
	},
});

export const {
	selectedMail,
	openSendMessage,
	closeSendMessage,
} = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectMessageOpen = (state) => state.mail.selectedMails;

export default mailSlice.reducer;
