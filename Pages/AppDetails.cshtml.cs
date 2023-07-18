using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApp.Pages
{
    public class AppDetailsModel : PageModel
    {
        private readonly ILogger<AppDetailsModel> _logger;

        public AppDetailsModel(ILogger<AppDetailsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}