class PubSub{

  static pubsubInstance = null;
  this.eventObj = {
    a: [Fn1,Fn1]
  };

  addListener(name,Fn){
    if(this.eventObj[name])
      this.eventObj[name].push(Fn);
    else {
      this.eventObj[name]=[Fn];
    }
  }

  removeListener(name,Fn){
    this.eventObj[name] = this.eventObj[name].filter(callback => callback!=Fn);
  }

  pusher(name){
    this.eventObj[name].forEach(callback => callback())

  }

}
PubSub.provideInstance = () => {
  if(!PubSub.instanceCreated)
  {
    PubSub.pubsubInstance = new PubSub();
  }
  else
    return PubSub.pubsubInstance;

}
