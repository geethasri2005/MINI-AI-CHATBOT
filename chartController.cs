using Microsoft.AspNetCore.Mvc;

namespace ChatAIAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatController : ControllerBase
    {
        [HttpPost]
        public string Chat([FromBody] ChatMessage msg)
        {
            if (msg.Message.ToLower() == "hello")
            {
                return "Hello! How can I help you?";
            }

            return "I am your AI assistant.";
        }
    }
}
