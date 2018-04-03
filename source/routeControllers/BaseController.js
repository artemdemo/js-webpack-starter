class BaseController {
    constructor(routeEl) {
        this.routeEl = routeEl;
    }

    routeExit(ctx, next) {
        next();
    }

    routeEnter() {}
}

export default BaseController;
