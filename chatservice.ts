using MySql.Data.MySqlClient;

namespace ChatAIAPI.Services
{
    public class ChatService
    {
        private string connectionString = "server=localhost;user=root;password=Sree@20052006;database=chatbot_db";

        public string GetResponse(string message)
        {
            string response = "Sorry, I don't understand.";

            using (MySqlConnection conn = new MySqlConnection(connectionString))
            {
                conn.Open();

                string query = "SELECT bot_response FROM chatbot_responses WHERE LOWER(user_message) = LOWER(@msg) LIMIT 1";

                MySqlCommand cmd = new MySqlCommand(query, conn);
                cmd.Parameters.AddWithValue("@msg", message);

                var result = cmd.ExecuteScalar();

                if (result != null)
                {
                    response = result.ToString();
                }
            }

            return response;
        }
    }
}
