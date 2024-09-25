const client = require('../utils/conn');
const AddStartupModel = async(basic, official, founder, description, official_email_address) => {
    return new Promise((resolve, reject)=> {
        client.query("INSERT INTO test_startup(basic, official, founder, description, official_email_address, startup_status) VALUES($1, $2, $3, $4, $5, $6)", [basic, official, founder, description, official_email_address, 'Active'], 
          (err, result) => {
            if(err)
            {
                reject({err});
            }
            else
            {
                resolve(result);
            }
          }  
        )
    })
}

const StartupDataModel = async() => {
    return new Promise((resolve, reject) => {
            const TotalCountStartups = new Promise((resolveQuery1, rejectQuery1) => {
                    client.query("SELECT COUNT(basic::json->'startup_name') AS startup_total FROM test_startup", (err, result) => {
                        if(err)
                        {
                            rejectQuery1(err)
                        }
                        else
                        {
                            resolveQuery1(result)
                        }
                    })
            })
            const ActiveStartups = new Promise((resolveQuery2, rejectQuery2) => {
                client.query("SELECT COUNT(startup_status) AS active FROM test_startup WHERE startup_status='Active'", (err, result) => {
                    if(err)
                    {
                        rejectQuery2(err)
                    }
                    else
                    {
                        resolveQuery2(result)
                    }
                }) 
            })
            const DroppedStartups = new Promise((resolveQuery3, rejectQuery3) => {
                client.query("SELECT COUNT(startup_status) AS Dropped_status FROM test_startup WHERE startup_status='Dropped'", (err, result) => {
                    if(err)
                    {
                        rejectQuery3(err);
                    }
                    else
                    {
                        resolveQuery3(result)
                    }
                })
            })

            const GraduatedStartups = new Promise((resolveQuery3, rejectQuery3) => {
                client.query("SELECT COUNT(startup_status) AS graduated_status FROM test_startup WHERE startup_status='Graduated'", (err, result) => {
                    if(err)
                    {
                        rejectQuery3(err);
                    }
                    else
                    {
                        resolveQuery3(result)
                    }
                })
            })

            const Manufacturing = new Promise((resolveQuery4, rejectQuery4) => {
                client.query("SELECT COUNT(basic::json->'startup_program') AS startup_manufacturing FROM test_startup WHERE (basic->>'startup_program')='Manufacturing & Industry'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery4(err);
                    }
                    else
                    {
                        resolveQuery4(result);
                    }
                })
            })

            const Services = new Promise((resolveQuery4, rejectQuery4) => {
                client.query("SELECT COUNT(basic::json->'startup_program') AS startup_services FROM test_startup WHERE (basic->>'startup_program')='Services'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery4(err);
                    }
                    else
                    {
                        resolveQuery4(result);
                    }
                })
            })

            const Edtech = new Promise((resolveQuery4, rejectQuery4) => {
                client.query("SELECT COUNT(basic::json->'startup_program') AS startup_edtech FROM test_startup WHERE (basic->>'startup_program')='Edtech'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery4(err);
                    }
                    else
                    {
                        resolveQuery4(result);
                    }
                })
            })

            const Agriculture = new Promise((resolveQuery4, rejectQuery4) => {
                client.query("SELECT COUNT(basic::json->'startup_program') AS startup_agriculture FROM test_startup WHERE (basic->>'startup_program')='Agriculture & Food'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery4(err);
                    }
                    else
                    {
                        resolveQuery4(result);
                    }
                })
            })

            const Hardware = new Promise((resolveQuery4, rejectQuery4) => {
                client.query("SELECT COUNT(basic::json->'startup_program') AS startup_hardware FROM test_startup WHERE (basic->>'startup_program')='Hardware & IOT'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery4(err);
                    }
                    else
                    {
                        resolveQuery4(result);
                    }
                })
            })
            const Energy = new Promise((resolveQuery4, rejectQuery4) => {
                client.query("SELECT COUNT(basic::json->'startup_program') AS startup_energy FROM test_startup WHERE (basic->>'startup_program')='Energy & Environment'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery4(err);
                    }
                    else
                    {
                        resolveQuery4(result);
                    }
                })
            })

            const Ecommerce = new Promise((resolveQuery4, rejectQuery4) => {
                client.query("SELECT COUNT(basic::json->'startup_program') AS startup_ecommerce FROM test_startup WHERE (basic->>'startup_program')='Ecommerce & Retail'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery4(err);
                    }
                    else
                    {
                        resolveQuery4(result);
                    }
                })
            })

            const Social = new Promise((resolveQuery4, rejectQuery4) => {
                client.query("SELECT COUNT(basic::json->'startup_program') AS startup_social FROM test_startup WHERE (basic->>'startup_program')='Social & Leisure'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery4(err);
                    }
                    else
                    {
                        resolveQuery4(result);
                    }
                })
            })

            const SoftwareData = new Promise((resolveQuery4, rejectQuery4) => {
                client.query("SELECT COUNT(basic::json->'startup_program') AS startup_software FROM test_startup WHERE (basic->>'startup_program')='Software & Data'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery4(err);
                    }
                    else
                    {
                        resolveQuery4(result);
                    }
                })
            })


            // const EnergyPratham = new Promise((resolveQuery5, rejectQuery5) => {
            //     client.query("SELECT COUNT()")
            // })

//////PRATHAM DATA STARTS
            const EnergyPratham = new Promise((resolveQuery5, rejectQuery5) => {
                client.query("SELECT COUNT(basic::json->'program') AS energy_program_count FROM test_startup WHERE (basic->>'program')='Pratham' AND (basic->>'startup_program')='Energy & Environment'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery5(err);
                    }
                    else
                    {
                        resolveQuery5(result);
                    }
                })
            })

            const HardwarePratham = new Promise((resolveQuery7, rejectQuery7) => {
                client.query("SELECT COUNT(basic::json->'program') AS hardware_program_count FROM test_startup WHERE (basic->>'program')='Pratham' AND (basic->>'startup_program')='Hardware & IOT'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery7(err);
                    }
                    else
                    {
                        resolveQuery7(result);
                    }
                })
            })
            
            const SoftwareDataPratham = new Promise((resolveQuery8, rejectQuery8) => {
                client.query("SELECT COUNT(basic::json->'program') AS software_program_count FROM test_startup WHERE (basic->>'program')='Pratham' AND (basic->>'startup_program')='Software & Data'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery8(err);
                    }
                    else
                    {
                        resolveQuery8(result);
                    }
                })
            })

            const EdtechPratham = new Promise((resolveQuery9, rejectQuery9) => {
                client.query("SELECT COUNT(basic::json->'program') AS edtech_program_count FROM test_startup WHERE (basic->>'program')='Pratham' AND (basic->>'startup_program')='Edtech'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery9(err);
                    }
                    else
                    {
                        resolveQuery9(result);
                    }
                })
            })
            const ServicesPratham = new Promise((resolveQuery10, rejectQuery10) => {
                client.query("SELECT COUNT(basic::json->'program') AS services_program_count FROM test_startup WHERE (basic->>'program')='Pratham' AND (basic->>'startup_program')='services'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery10(err);
                    }
                    else
                    {
                        resolveQuery10(result);
                    }
                })
            })    

            const AgriculturePratham = new Promise((resolveQuery10, rejectQuery10) => {
                client.query("SELECT COUNT(basic::json->'program') AS agriculture_program_count FROM test_startup WHERE (basic->>'program')='Pratham' AND (basic->>'startup_program')='Agriculture & Food'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery10(err);
                    }
                    else
                    {
                        resolveQuery10(result);
                    }
                })
            })  

            const EcommercePratham = new Promise((resolveQuery11, rejectQuery11) => {
                client.query("SELECT COUNT(basic::json->'program') AS ecommerce_program_count FROM test_startup WHERE (basic->>'program')='Pratham' AND (basic->>'startup_program')='Ecommerce & Retail'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery11(err);
                    }
                    else
                    {
                        resolveQuery11(result);
                    }
                })
            })  

            const SocialPratham = new Promise((resolveQuery12, rejectQuery12) => {
                client.query("SELECT COUNT(basic::json->'program') AS social_program_count FROM test_startup WHERE (basic->>'program')='Pratham' AND (basic->>'startup_program')='Social & Leisure'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery12(err);
                    }
                    else
                    {
                        resolveQuery12(result);
                    }
                })
            })
            const ManufacturingPratham = new Promise((resolveQuery6, rejectQuery6) => {
                client.query("SELECT COUNT(basic::json->'program') AS manufacturing_program_count FROM test_startup WHERE (basic->>'program')='Pratham' AND (basic->>'startup_program')='Manufacturing & Industry'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery6(err);
                    }
                    else
                    {
                        resolveQuery6(result);
                    }
                })
            })
/////PRATHAM DATA ENDS (FINACNE)
            ///AkSHAR DATA starts

            const EnergyAkshar = new Promise((resolveQuery13, rejectQuery13) => {
                client.query("SELECT COUNT(basic::json->'program') AS energy_program_count_akshar FROM test_startup WHERE (basic->>'program')='Akshar' AND (basic->>'startup_program')='Energy & Environment'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery13(err);
                    }
                    else
                    {
                        resolveQuery13(result);
                    }
                })
            })

            const HardwareAkshar = new Promise((resolveQuery14, rejectQuery14) => {
                client.query("SELECT COUNT(basic::json->'program') AS hardware_program_count_akshar FROM test_startup WHERE (basic->>'program')='Akshar' AND (basic->>'startup_program')='Hardware & IOT'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery14(err);
                    }
                    else
                    {
                        resolveQuery14(result);
                    }
                })
            })
            
            const SoftwareDataAkshar = new Promise((resolveQuery15, rejectQuery15) => {
                client.query("SELECT COUNT(basic::json->'program') AS software_program_count_akshar FROM test_startup WHERE (basic->>'program')='Akshar' AND (basic->>'startup_program')='Software & Data'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery15(err);
                    }
                    else
                    {
                        resolveQuery15(result);
                    }
                })
            })

            const EdtechAkshar = new Promise((resolveQuery16, rejectQuery16) => {
                client.query("SELECT COUNT(basic::json->'program') AS edtech_program_count_akshar FROM test_startup WHERE (basic->>'program')='Akshar' AND (basic->>'startup_program')='Edtech'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery16(err);
                    }
                    else
                    {
                        resolveQuery16(result);
                    }
                })
            })
            const ServicesAkshar = new Promise((resolveQuery17, rejectQuery17) => {
                client.query("SELECT COUNT(basic::json->'program') AS services_program_count_akshar FROM test_startup WHERE (basic->>'program')='Akshar' AND (basic->>'startup_program')='services'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery17(err);
                    }
                    else
                    {
                        resolveQuery17(result);
                    }
                })
            })    

            const AgricultureAkshar = new Promise((resolveQuery18, rejectQuery18) => {
                client.query("SELECT COUNT(basic::json->'program') AS agriculture_program_count_akshar FROM test_startup WHERE (basic->>'program')='Akshar' AND (basic->>'startup_program')='Agriculture & Food'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery18(err);
                    }
                    else
                    {
                        resolveQuery18(result);
                    }
                })
            })  

            const EcommerceAkshar = new Promise((resolveQuery19, rejectQuery19) => {
                client.query("SELECT COUNT(basic::json->'program') AS ecommerce_program_count_akshar FROM test_startup WHERE (basic->>'program')='Akshar' AND (basic->>'startup_program')='Ecommerce & Retail'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery19(err);
                    }
                    else
                    {
                        resolveQuery19(result);
                    }
                })
            })  

            const SocialAkshar = new Promise((resolveQuery20, rejectQuery20) => {
                client.query("SELECT COUNT(basic::json->'program') AS social_program_count_akshar FROM test_startup WHERE (basic->>'program')='Akshar' AND (basic->>'startup_program')='Social & Leisure'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery20(err);
                    }
                    else
                    {
                        resolveQuery20(result);
                    }
                })
            })

            const ManufacturingAkshar = new Promise((resolveQuery21, rejectQuery21) => {
                client.query("SELECT COUNT(basic::json->'program') AS manufacturing_program_count_akshar FROM test_startup WHERE (basic->>'program')='Akshar' AND (basic->>'startup_program')='Manufacturing & Industry'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery21(err);
                    }
                    else
                    {
                        resolveQuery21(result);
                    }
                })
            })
            ///pratham 
            const PrathamTeamsCount = new Promise((resolveQuery22, rejectQuery22) => {
                client.query("SELECT COUNT(basic::json->'program') AS pratham_teams FROM test_startup WHERE (basic->>'program')='Pratham'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery22(err);
                    }
                    else
                    {
                        resolveQuery22(result);
                    }
                })
            })

            const AksharTeamsCount = new Promise((resolveQuery22, rejectQuery22) => {
                client.query("SELECT COUNT(basic::json->'program') AS akshar_teams FROM test_startup WHERE (basic->>'program')='Akshar'", (err, result) => {
                    if(err)
                    {   
                        rejectQuery22(err);
                    }
                    else
                    {
                        resolveQuery22(result);
                    }
                })
            })


            const UpdatedFunds = new Promise((resolveQuery23, rejectQuery23) => {
                client.query("SELECT SUM(amount) AS funds_distributed FROM update_funding WHERE funding_type='Funding Distributed'", (err, result) => {
                    if(err)
                    {
                        rejectQuery23(err)
                    }
                    else
                    {
                        resolveQuery23(result);
                    }
                })
            })

            const UpdateFundsUtilized = new Promise((resolveQuery24, rejectQuery24) => {
                client.query("SELECT SUM(amount) AS funds_utilized FROM update_funding WHERE funding_type='Funding Utilized'", (err, result) => {
                    if(err)
                    {
                        rejectQuery24(err)
                    }
                    else
                    {
                        resolveQuery24(result);
                    }
                })
            })

            //
            //Pratham team total fund distributed
            const TotalPrathamTeamFundsDistributed = new Promise((resolveQuery25, rejectQuery25) => {
                client.query("SELECT ts.basic->>'program' AS program, ts.official_email_address, ts.basic->>'startup_name' AS startup_name,SUM(uf.amount) AS amount_total FROM test_startup ts JOIN update_funding uf ON uf.startup_name = ts.official_email_address WHERE ts.basic->>'program' = 'Pratham' AND uf.funding_type = 'Funding Distributed' GROUP BY ts.official_email_address;", (err, result) => {
                    if(err)
                    {
                        rejectQuery25(err)
                    }
                    else
                    {
                        resolveQuery25(result);
                    }
                })
            })

            // const TotalAksharTeamFundsDistributed = new Promise((resolveQuery26, rejectQuery26) => {
            //     client.query("SELECT ts.basic->>'program' AS program, ts.official_email_address, ts.basic->>'startup_name' AS startup_name, uf.amount, SUM(uf.amount) AS amount_total FROM test_startup ts JOIN update_funding uf ON uf.startup_name = ts.official_email_address WHERE ts.basic->>'program' = 'Akshar' AND uf.funding_type = 'Funding Distributed' GROUP BY ts.official_email_address;", (err, result) => {
            //         if (err) {
            //             rejectQuery26(err);
            //         } else {
            //             resolveQuery26(result);
            //         }
            //     });
            // });
            


            //SELECT ts.basic->>'program' AS program, ts.official_email_address, ts.basic->>'startup_name' AS startup_name,SUM(uf.amount) AS amount_total FROM test_startup ts LEFT JOIN update_funding uf ON uf.sta
//rtup_name = ts.official_email_address WHERE ts.basic->>'program' = 'Pratham' GROUP BY ts.official_email_address;


            //startup count
            ///Askshar Data ENds
            Promise.all([TotalCountStartups, ActiveStartups, DroppedStartups, GraduatedStartups, Manufacturing, Services, Edtech, Agriculture, Hardware, Energy, Ecommerce, Social, SoftwareData, EnergyPratham, ManufacturingPratham, HardwarePratham, SoftwareDataPratham, EdtechPratham, ServicesPratham, AgriculturePratham, EcommercePratham, SocialPratham, 
                ManufacturingAkshar,
                ServicesAkshar,
                EdtechAkshar,
                AgricultureAkshar,
                HardwareAkshar,
                EnergyAkshar,
                EcommerceAkshar,
                SocialAkshar,
                SoftwareDataAkshar,
                PrathamTeamsCount,
                AksharTeamsCount,
                UpdatedFunds,
                UpdateFundsUtilized,
                TotalPrathamTeamFundsDistributed,
                //TotalAksharTeamFundsDistributed
                ])
            .then(([TotalCountStartups, ActiveStartups, DroppedStartups, GraduatedStartups, Manufacturing, Services, Edtech, Agriculture, Hardware, Energy, Ecommerce, Social, SoftwareData, EnergyPratham, ManufacturingPratham, HardwarePratham, SoftwareDataPratham, EdtechPratham, ServicesPratham, AgriculturePratham, EcommercePratham, SocialPratham,
                ManufacturingAkshar,
                ServicesAkshar,
                EdtechAkshar,
                AgricultureAkshar,
                HardwareAkshar,
                EnergyAkshar,
                EcommerceAkshar,
                SocialAkshar,
                SoftwareDataAkshar,
                PrathamTeamsCount,
                AksharTeamsCount,
                UpdatedFunds,
                UpdateFundsUtilized,
                TotalPrathamTeamFundsDistributed,
                //TotalAksharTeamFundsDistributed
            ]) => {
                resolve({
                    TotalCountStartups,
                    ActiveStartups,
                    DroppedStartups,
                    GraduatedStartups,
                    Manufacturing,
                    Services,
                    Edtech,
                    Agriculture,
                    Hardware,
                    Energy,
                    Ecommerce,
                    Social,
                    SoftwareData,
                    EnergyPratham,
                    ManufacturingPratham,
                    HardwarePratham,
                    SoftwareDataPratham,
                    EdtechPratham,
                    ServicesPratham,
                    AgriculturePratham,
                    EcommercePratham,
                    SocialPratham,
                    ManufacturingAkshar,
                    ServicesAkshar,
                    EdtechAkshar,
                    AgricultureAkshar,
                    HardwareAkshar,
                    EnergyAkshar,
                    EcommerceAkshar,
                    SocialAkshar,
                    SoftwareDataAkshar,
                    PrathamTeamsCount,
                    AksharTeamsCount,
                    UpdatedFunds,
                    UpdateFundsUtilized,
                    TotalPrathamTeamFundsDistributed,
                    //TotalAksharTeamFundsDistributed
                });
            })
            .catch((err) => {
                reject(err)
            });
    })  
}

const FetchStartupsModel = async() => {
    return new Promise((resolve, reject) => {
        client.query("SELECT basic::json->'startup_name' AS startup_name, basic::json->'startup_program' as startup_sector, basic::json->'program' as program, founder::json->'founder_name' as founder_name, official::json->'official_email_address' AS email_address FROM test_startup;", (err, result) => {
            if(err)
            {   
                reject(err);
            }
            else
            {
                resolve(result);
            }
        })
    })
} 
module.exports = {AddStartupModel, StartupDataModel, FetchStartupsModel};