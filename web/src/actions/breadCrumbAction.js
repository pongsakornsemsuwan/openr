const actionType = {
	getBreadCrumb: 'GET_BREAD_CRUMB',
	spreadBreadCrump: 'SPREAD_BREAD_CRUMB'
}

export const getBreadCrumb = (breadcrumb) => {
	return {
		type: actionType.getBreadCrumb,
		payload: {

		}
	}
}

export const spreadBreadCrump = (breadcrumb) => {
	return {
		type: actionType.spreadBreadCrump,
		payload: {
			breadcrumb: breadcrumb
		}
	}
}
