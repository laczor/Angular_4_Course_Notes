// A service, which has 1 method to console log 1 line out.
export class LoggingService {
    logStatusChange (status: string){
        console.log('A server status changed, new status: ' + status);
    }
}