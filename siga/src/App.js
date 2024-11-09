import { useEffect, useState } from "react"
import './App.css';

function App() {
  const [pessoa, setPessoa] = useState()

  const infos = {
    "9dc8da89-9c34-4395-920c-036e5cdaa3f0": {
      nome: "GUILHERME MORIGGI DE SOUZA",
    },
    "c1277de6-fd38-4b5f-a083-214a9db55e5b": {
      nome: "MAYARA TATIELEN SILVA VIANA",
    }
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const ca = queryParams.get("ca")
    setPessoa(infos[ca])
  }, [])

  if (!pessoa) {
    return (<>Carregando...</>)
  }

  return (
    <div className="Form" style={{ opacity: "1" }} onkeyup="gx.evt.onkeyup(event)" onkeypress="gx.evt.onkeypress(event,false,false)" onkeydown="gx.evt.onkeypress(null,false,false)">
      <form id="MAINFORM" onsubmit="try{return gx.csv.validForm()}catch(e){return true,}" name="MAINFORM" method="post" action="sis_validador.aspx?ca19786a-37cd-4d0f-8716-9628f31003cf" className="Form">
        <div>
          <span className=" gx_ev" id="gxErrorViewer"></span></div><table id="TABLE1" className="Table" cellpadding="1" cellspacing="2" style={{ width: "800px" }}>
          <tbody>
            <tr>
              <td style={{ height: "53px" }}>
                <table id="TABLE2" className="Table" cellpadding="1" cellspacing="2">
                  <tbody>
                    <tr>
                      <td style={{ textAlign: "-khtml-center,width:114px" }}></td>
                      <td style={{
                        textAlign: "-khtml-center",
                        width: "271px"
                      }}>
                        <img src="Resources/logo25.jpg" id="IMAGE3" alt="" className="Image" style={{ width: 131, height: 69 }} />
                      </td>
                      <td><img src="Resources/logo_cps_versao_cor_23.png" id="IMAGE10" alt="" className="Image" style={{ width: 122, height: 65 }} /></td>
                      <td><img src="Resources/LOGOCEETEPS23.png" id="IMAGE9" alt="" className="Image" style={{ width: 196, height: 76 }} /></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "-khtml-center", height: "22px" }}>
                <div className="TextBlock" style={{ display: "inline", background: "transparent" }} id="TEXTBLOCK1" gxformat="1">
                  <h3 style={{ fontSize: "24px", color: "black", textAlign: "center" }}>Autenticador de Documento</h3>
                  <div style={{ fontSize: "15px", maxWidth: "800px", width: "800px", whiteSpace: "normal !important", color: "black", textAlign: "center", paddingLeft: "110px" }}>O documento impresso, portador deste código de identificação, refere-se à seguinte operação no SIGA:</div>
                  <table style={{ border: "1px solid black", borderRadius: "5px", width: "800px", color: "black", height: "234px", marginLeft: "auto", marginRight: "auto" }}>
                    <tbody>
                      <tr>
                        <td style={{ width: "136px", fontSize: "18px" }}>Documento tipo</td>
                        <td style={{ fontSize: "14px", width: "465px" }}><strong>Carteira de Estudante	</strong></td>
                      </tr>
                      <tr>
                        <td style={{ width: "136px", fontSize: "18px" }}>Emitido em</td><td style={{ fontSize: "14px", width: "465px" }}><strong>18/11/22	</strong></td>
                      </tr>
                      <tr>
                        <td style={{ width: "136px", fontSize: "18px" }}>Para</td><td style={{ fontSize: "14px", width: "465px" }}><strong>{pessoa.nome}</strong></td>
                      </tr>
                      <tr>
                        <td style={{ width: "136px", fontSize: "18px" }}>Perfil da pessoa</td><td style={{ fontSize: "14px", width: "465px" }}><strong>ALUNO	</strong></td>
                      </tr>
                      <tr>
                        <td style={{ width: "136px", fontSize: "18px" }}>Faculdade</td><td style={{ fontSize: "14px", width: "465px" }}><strong>FATEC Americana</strong></td>
                      </tr>
                      <tr>
                        <td style={{ width: "136px", fontSize: "18px" }}>Curso</td><td style={{ fontSize: "14px", width: "465px" }}><strong>Curso Superior de Tecnologia em Logística -  	</strong></td>
                      </tr>
                      <tr>
                        <td style={{ width: "136px", fontSize: "18px" }}>Turno</td><td style={{ fontSize: "14px", width: "465px" }}><strong>Noite	</strong></td>
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ fontSize: "15px", maxWidth: "800px", width: "800px", whiteSpace: "normal", textAlign: "center", color: "black", paddingLeft: "110px" }}>
                    <br />
                    Este documento é autêntico e foi impresso pelo sistema SIGA - Sistema de Informações Gerenciais do Centro Paula Souza, pelo responsável local da porém sua validade está condicionada à assinatura e chancela do responsável. Esta autenticação não garante a validade do mesmo, pois a mesma, se for o caso, deverá constar no próprio corpo do documento impresso.
                  </div>
                </div >
                <script type="text/javascript">gx.dom.setAttribute("TEXTBLOCK1","gxformat","1"),</script>
              </td >
            </tr >
            <tr align="center">
              <td style={{ textAlign: "-khtml-center" }}>
                <table id="TABLE3" align="center" className="Table" cellpadding="1" cellspacing="2">
                  <tbody>
                    <tr align="center"><td style={{ textAlign: "-khtml-center" }}>
                      <fieldset id="GROUP1" style={{ mozBorderRadius: "3pt" }} className="CatalogoGrupo">
                        <legend className="CatalogoGrupoTitle">Acesso ao Documento emitido pelo sistema</legend>
                        <table id="TABLE4" className="Table" cellpadding="1" cellspacing="2"><tbody>
                          <tr>
                            <td style={{
                              height: "50px"
                            }}>
                              <img src="Resources/blankImage.PNG" id="IMAGE6" alt="" className="Image" />
                            </td>
                          </tr>
                          <tr align="center">
                            <td style={{
                              textAlign: "-khtml-center,height:16px",
                            }}>
                              <input type="button" name="BUTTON1" value="Baixar PDF" title="Baixar PDF" className="Button" style={{ background: "#00BFFF" }} onclick="if(gx.evt.jsEvent(this)) {gx.evt.execEvt('E\'DOWNLOADING\'.', this),} else return false," onfocus="gx.evt.onfocus(this, 29,'',false,'',0)" />
                            </td>
                          </tr>
                          <tr>
                            <td style={{
                              height: "46px"
                            }}>
                              <img src="Resources/blankImage.PNG" id="IMAGE6" alt="" className="Image" />
                            </td>
                          </tr>
                        </tbody>
                        </table>
                      </fieldset>
                    </td >
                    </tr >
                  </tbody >
                </table >
              </td >
            </tr >
            <tr align="center">
              <td style={{ textAlign: "-khtml-center" }}>
                <img src="Resources/blankImage.PNG" id="IMAGE2" alt="" className="Image" />
              </td>
            </tr >
            <tr align="center">
              <td style={{ textAlign: "-khtml-center" }}>
                <img src="Resources/logo_siga.PNG" id="IMAGE1" alt="" className="Image" />
              </td>
            </tr >
            <tr>
              <td>
                <textarea cols="80" rows="4" name="vCAMINHOFISICO" id="vCAMINHOFISICO" onfocus="gx.evt.onfocus(this, 41,'',false,'',0)" onchange="gx.evt.onchange(this)" onblur=",gx.evt.onblur(41)," className="Attribute" style={{ display: "none" }} onkeypress="return gx.evt.checkMaxLength(this,250,event)," maxlength="250"></textarea>
                <script type="text/javascript">gx.dom.setAttribute("vCAMINHOFISICO","maxlength","250"),</script>
                <span className="Attribute" style={{ display: "none" }}>
                  <input type="checkbox" id="vDOCUMENTOEXPIRADO" name="vDOCUMENTOEXPIRADO" value="" onfocus="gx.evt.onfocus(this, 42,'',false,'',0)" onclick="gx.fn.checkboxClick(42, this, 'true', 'false'),gx.evt.onchange(this)," onblur=",gx.evt.onblur(42)," />
                </span>
              </td >
            </tr >
          </tbody >
        </table >
        <div>
          <input type="hidden" name="GXState" value="{&quot,_EventName&quot,:&quot,&quot,,&quot,_EventGridId&quot,:&quot,&quot,,&quot,_EventRowId&quot,:&quot,&quot,,&quot,vCHAVE&quot,:&quot,ca19786a-37cd-4d0f-8716-9628f31003cf&quot,,&quot,GX_FocusControl&quot,:&quot,vCAMINHOFISICO&quot,,&quot,GX_AJAX_KEY&quot,:&quot,76469B8B9590EE3E400B79732A928FE6&quot,,&quot,AJAX_SECURITY_TOKEN&quot,:&quot,6359DEE85F4EF6C34C026516CCA0E883A74CBBB2CCD1E817E222633144FF3FC1&quot,,&quot,GX_CMP_OBJS&quot,:{},&quot,sCallerURL&quot,:&quot,&quot,,&quot,GX_RES_PROVIDER&quot,:&quot,GXResourceProvider.aspx&quot,,&quot,GX_THEME&quot,:&quot,Projeto&quot,}" autocomplete="off" />
        </div>
      </form >
      <script type="text/javascript" src="messages.por.js?65285"></script>
      <script type="text/javascript" src="sis_validador.js?2285574"></script>
      <div style={{ display: "none" }}></div>
      <div id="gx_ajax_notification" style={{ display: "none", position: "absolute", textAlign: "center", verticalAlign: "top", top: "0px", left: "0px" }}>
        <div style={{ backgroundColor: "#BEBEBE", filter: "alpha(opacity = 50)", opacity: "0.5", position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%" }}></div>
        < img id="gx_ajax_indicator" src="https://siga.cps.sp.gov.br/fatec/indicator.gif" width="16px" height="16px" align="absmiddle" />
      </div >
    </div >
  );
}

export default App;
