namespace CompanyWebApi.Settings
{
    public class DbSettings
    {
        public string Server { get; set; }
        public string Database { get; set; }
        public string Password { get; set; }
        public string User { get; set; }

        public string ConnectionString
        { 
            get 
            {
                return $"Server={Server};Database={Database};User Id={User};password={Password};MultipleActiveResultSets=true;";
            }
        }
    }
}