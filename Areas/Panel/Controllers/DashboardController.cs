using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dahak.Models;
using System.ComponentModel;/*
using System.Net.Http;
using AttributeRouting.Web.Http;
using System.Web.Http;
using System.Web.Mvc;*/

namespace dahak.Controllers
{
    [Area("Panel")]
    [Route("[area]/[controller]")]
    [Description("پیشخوان‌")]
    public class DashboardController : Controller
    {

        [Route("Index")]
        [Route("")]
        public IActionResult Index(){
            return View();
        }
        
        [Route("Privacy")]
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        [Route("Error")]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
