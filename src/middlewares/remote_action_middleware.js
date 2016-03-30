/**
 * Created by deenjun on 16/2/15.
 */
export default socket => store => next => action => {
    console.log('in middleware', action);
    if(action.meta && action.meta.remote) {
        console.log('emit action', action);
        socket.emit('action', action);
    }
    return next(action);
}