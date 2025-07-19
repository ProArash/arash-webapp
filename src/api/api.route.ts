export const ApiRoutes = {
	// auth
	signIn: "/auth/signIn",
	register: "/auth/register",
	profile: "/auth/profile",
	logOut: "/auth/logOut",
	// plan
	plan: "/plan",
	getPlanById: "/plan/getPlanById",
	deletePlanById: "/plan/deletePlanById",
	updatePlanById: "/plan/updatePlanById",
	// order
	order: "/order",
	getOrderById: "/order/getOrderById",
	myOrders: "/order/myOrders",
	verifyOrder: "/order/verify",
	deleteUserOrderById: "/order/deleteUserOrderById",
	// discount
	discount: "/discount",
	// user
	editCurrentProfile:'/user/editProfile',
	getUsers:'/user'
};
