<?php

require_once 'Classes/dompdf/autoload.inc.php';
// reference the Dompdf namespace
use Dompdf\Dompdf;

// instantiate and use the dompdf class

class CustomDomPDF extends Dompdf {

    const A4 = 'A4';
    const PORTRAIT = 'portrait';
    private $html = '';
    
    public function loadTemplateInforme($data_reunion, $data_asistentes) {

        $utils = new PlantillaUtils();

        $this->setHead('Informe', 'informe');

        $this->html .= '<body>';
        $this->html .= '    <div class="logo">';
        $this->html .= '            <img src="../public/recursos/logos.png" >';
        $this->html .= '    </div>';
        $this->html .= '    <div class="body">';
        $this->html .= '            <div >';
        $this->html .= '                    <p class="titulo">Reunión: '.$data_reunion['reunion'].'<p><br/>';
        //$this->html .= '            </div>';
        //$this->html .= '            <div >';
        $this->html .= '                    <p class="titulo-seccion">Datos básicos</p>';
        $this->html .= '                    <p class="campos">Dinamizador responsable: '.$data_reunion['fk_contacto'].'</p>';
        $this->html .= '                    <p class="campos">Fecha/Hora: '.$data_reunion['fecha'].'/'.$data_reunion['hora_inicio'].'</p>';
        $this->html .= '                    <p class="campos">Finalización: '.$data_reunion['hora_fin'].'</p>';
        $this->html .= '                    <p class="campos">Ubicación: '.$data_reunion['ubicacion'].'</p>';
        $this->html .= '                    <p class="campos">Modo de reunión: '.$data_reunion['fk_modo_reunion'].'</p>';
        $this->html .= '                    <p class="campos">Motivo de reunión: '.$data_reunion['fk_motivo_reunion'].'</p>';
        $this->html .= '                    <p class="campos">Entidad objetivo: '.$data_reunion['fk_entidad_target'].'</p>';
        $this->html .= '                    <p class="campos">Código entidad objetivo: '.$data_reunion['fk_codigo'].'</p>';
        $this->html .= '                    <p class="campos">Zona de actuación: '.$data_reunion['fk_zona'].'</p>';
        $this->html .= '            </div>';
        $this->html .= '            <div>';
        $this->html .= '                    <p class="titulo-seccion">Asistentes</p>';
        
        foreach ($data_asistentes as $asistente) {
            $this->html .= '                    <p class="campos">'.$asistente['entidad'].' - '.$asistente['nombre_completo'];
            
            if ($asistente['cargo']) {
                $this->html .= ' - '.$asistente['cargo'];
            }

            $this->html .= '</p>';

        }

        $this->html .= '            </div>';
        $this->html .= '            <div>';
        $this->html .= '                    <p class="titulo-seccion">Objetivos / Orden del día</p>';
        $this->html .= '                    <p>'.$data_reunion['objetivo'].'</p><br/>';
        $this->html .= '            </div>';
        $this->html .= '            <div>';
        $this->html .= '                    <p class="titulo-seccion">Resultados / Acta</p>';
        $this->html .= '                    <p>'.$data_reunion['resultado'].'</p>';
        $this->html .= '            </div>';

        $this->html .= '    <div class="">';
        // modo_reunion = 2; Telemática
        if ($data_reunion['id_modo_reunion'] == 2) {
            $this->html .= '                    <p class="">Telemáticamente';
        } else {
            $this->html .= '                    <p class="">En '.$data_reunion['localidad'];
        }
        $this->html .= ', con fecha '.$data_reunion['fecha'].':</p>';
        $this->html .= '    </div>';

        $this->html .= '    <div class="row">';
        $this->html .= '        <div class="column"> Firma Dinamizador<br/></div>';
        $this->html .= '        <div class="column"> Firma y sello: '.$data_reunion['fk_entidad_target'].'<br/></div>';
        $this->html .= '    </div>';        

        $this->html .= '    </div>';


/*
        $this->html .= '    <div class="footer fixed-section">';
        $this->html .= '      <div class="left">';
        $this->html .= '        <span class="report-time">08/05/2016 09:43:06</span><br>';
        $this->html .= '        <span class="promo">Generated by QuickEMR.com</span>';
        $this->html .= '      </div>';
        $this->html .= '      <div class="center">';
        $this->html .= '        <span class="signature-warning">Document Electronically Signed</span>';
        $this->html .= '      </div>';
        $this->html .= '      <div class="right">';
        $this->html .= '        <span class="page-number">Page </span>';
        $this->html .= '      </div>';
        $this->html .= '    </div>';
*/
        $this->html .= '</body>';

        $this->loadHtml($this->html);

   
    }

    public function generatePDF() {
        $this->setPaper(self::A4, self::PORTRAIT);
        $this->render();
        return base64_encode($this->output());
    }

    private function setHead($titulo , $css) {
        $this->html .= '<!doctype html>';
        $this->html .= '<html lang="es">';
        $this->html .= '<head>';
        $this->html .= '<meta charset="utf-8">';
        $this->html .= '<title>'.$titulo.'</title>';
        $this->html .= '<meta name="description" content="'.$titulo.'">';
        $this->html .= '<meta name="author" content="RADFPD">';
        $this->html .= '<link rel="stylesheet" href="Classes/css/'.$css.'.css" type="text/css">';
        $this->html .= '</head>';
    }
-
}

class PlantillaUtils {

    public function getDay($date) {
        return date("d", strtotime($date));
    }

    public function getMonthString($date) {
        return strftime('%B', date(strtotime($date)));
    }

    public function getYear($date) {
        return date("Y", strtotime($date));
    }
}

?>