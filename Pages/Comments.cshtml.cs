using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApp.Pages
{
    public class CommentsModel : PageModel
    {
        private readonly ILogger<CommentsModel> _logger;

        public CommentsModel(ILogger<CommentsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}