
import './App.css';
import Message from './Message';

function App() {
  return (
    <section class="pricing py-5">
    <div class="container">
      <div class="row">
      
         <Message price="$0" title="Free" period="/month" fa1="Single Users" fa2="5GB Storage" fa3="Unlimited Public Projects" 
         fa4="Community Access" fa5="Unlimited Private Projects" fa6="Dedicated Phone Support" fa7="Free Subdomain" fa8="Monthly Status Reports"></Message>
        
        <Message price="$9" title="Plus" period="/month" fa1="5 Users" fa2="5GB Storage" fa3="Unlimited Public Projects" 
         fa4="Community Access" fa5="Unlimited Private Projects" fa6="Dedicated Phone Support" fa7="Free Subdomain" fa8="Monthly Status Reports"></Message>
        
        <Message price="$49" title="Pro" period="/month" fa1="Unlimited Users" fa2="50GB Storage" fa3="Unlimited Public Projects" 
         fa4="Community Access" fa5="Unlimited Private Projects" fa6="Dedicated Phone Support" fa7="Free Subdomain" fa8="Monthly Status Reports"></Message>
        
    </div>
    </div>
    </section>
  );
}

export default App;
