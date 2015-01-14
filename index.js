class Auth{
    constructor(config,User,Post){
        this.mongoose = mongoose;
        this.config = config;
        this.isAuthenticated = function *(next){
            if(this.user){
                yield next;
            }else{
                this.status = 401;
                this.body = { message: 'authentication needed to perform this action' };
            }
        };
        this.isCreator = function *(){
            var post = yield Post.findOneQ({_id: this.params.id});
            if(this.user._id == post.author){
                yield next;
            }else{
                this.status = 401;
                this.body = {message: 'you need to be the creator of the post to perform this action'};
            }
        };
        this.isOwner = function *(){
            var user = yield User.findOneQ({_id: this.params.id});
            if(user._id == this.user._id){
                yield next;
            }else{
                this.status = 401;
                this.body = { message: 'you need to be the owner of this account to perform this action' };
            }
        };
        this.isAdmin = function *(){
            var user = yield User.findOneQ({_id: this.user._id});
            if(user.role == 'admin'){
                yield next;
            }else{
                this.status = 401;
                this.body = { message: 'you need to be administrator of this blog perform this action' };
            }
        };
    }
}


module.exports = Auth;