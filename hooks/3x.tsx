import  Script  from "next/script";

export default function WebChat(){

  return(
    <>      
      <div dangerouslySetInnerHTML={{__html:'<call-us-selector phonesystem-url="https://1829.3cx.cloud" party="rqdlmedia"></call-us-selector>'}}></div>
      <Script defer src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js" id="tcx-callus-js"></Script>
    </>
  );
}